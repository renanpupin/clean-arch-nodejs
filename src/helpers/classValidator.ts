import {ValidationError} from 'class-validator/types/validation/ValidationError'
export const extractErrorMessage = (validationErrors: ValidationError[]): string | null => {
    if (!validationErrors || validationErrors?.length === 0) {
        return null
    }

    //@ts-ignore
    const firstKey = Object.keys(validationErrors?.[0]?.constraints)?.[0]

    //@ts-ignore
    return validationErrors?.[0]?.constraints[firstKey]
}
