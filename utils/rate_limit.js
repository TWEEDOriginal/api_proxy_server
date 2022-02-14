import rate_limit from 'express-rate-limit'

export const limiter = rate_limit(
    {
        windowMs: 10 *60 * 1000, // 10 minutes
        max: 100
    }
)