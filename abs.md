# Solution 1
    - Creating a method that intakes a value "x", transforming that value to Number using Number(x) will ensure we get the same values returned as the basic Math.abs() method
    - In our custom method we can check if (x < 0), if this condition is true we can return -x, otherwise return x;

# Solution 2
    - As mentioned above in Solution 1 we can create a method and check if (x < 0), if the condition is true we can get the square root of x*x which will always return a positive value.

# Solution 3
    - Create a method and check if (x < 0), then either divide by -1 or multiply by -1

# Solution 4
    - This solution will not work for the value -Infinity as the others did, however if we provide a negative number for x we can return x - x * 2 which will return the absolute value
