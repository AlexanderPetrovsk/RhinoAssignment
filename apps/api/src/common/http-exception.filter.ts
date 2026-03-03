import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/client';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let responseStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        let responseMessage = 'Internal server error';
        console.log(exception);
        if (exception instanceof HttpException) {
            const { status, message } = this.handleHttpExceptions(exception, responseMessage);

            responseStatus = status;
            responseMessage = message;
        }

        if (exception instanceof Prisma.PrismaClientKnownRequestError) {
            const { status, message } = this.handlePrismaExceptions(exception, responseMessage, responseStatus);

            responseStatus = status;
            responseMessage = message;
        }

        if (exception instanceof PrismaClientValidationError) {
            responseStatus = HttpStatus.BAD_REQUEST;
            responseMessage = 'Invalid value provided';
        }

        response.status(responseStatus).json({
            statusCode: responseStatus,
            responseMessage,
            timestamp: new Date().toISOString(),
        });
    }

    private handleHttpExceptions(exception: HttpException, message: string): { status: number, message: string } {
        const httpStatus = exception.getStatus();
        let httpMessage = message;

        const exceptionResponse: any = exception.getResponse();

        if (typeof exceptionResponse === 'string') {
            httpMessage = exceptionResponse;
        } else {
            httpMessage = exceptionResponse.message;
        }

        return { status: httpStatus, message: httpMessage };
    }

    private handlePrismaExceptions(exception: Prisma.PrismaClientKnownRequestError, message: string, status: number): { status: number, message: string } {
        let prismaStatus = status;
        let prismaMessage = message;
        console.log(exception.code)
        switch (exception.code) {
            case 'P2025':
                prismaStatus = HttpStatus.NOT_FOUND;
                prismaMessage = 'Resource not found.';
                break;
            case 'P2000':
                prismaStatus = HttpStatus.BAD_REQUEST;
                prismaMessage = 'Provided value is too long.';
                break;
            case 'P2011':
                prismaStatus = HttpStatus.BAD_REQUEST;
                prismaMessage = 'Value should not be null.';
                break;
            default:
                prismaStatus = HttpStatus.INTERNAL_SERVER_ERROR;
                prismaMessage = 'Something went wrong.';
        }

        return { status: prismaStatus, message: prismaMessage };
    }
}