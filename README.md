# Unexpected Behavior with Negative Input in TypeScript Loop

This repository demonstrates a subtle bug in a TypeScript function designed to print numbers from 1 to n. The function exhibits unexpected behavior when provided a negative integer as input. This is because the loop condition `i <= n` never evaluates to true for negative values, resulting in an empty output.

The solution provided addresses this by explicitly handling negative input, either by throwing an error or adapting the loop to handle negative values appropriately.