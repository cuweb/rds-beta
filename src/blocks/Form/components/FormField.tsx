// @see https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls
// @see https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
// @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement

import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FormikValues, Field } from 'formik'
import FormFieldWrapper, { FormFieldWrapperProps } from './FormFieldWrapper'
import FormSelect from './FormSelect'
import FormMultiple from './FormMultiple'
import FormFile from './FormFile'

export type InputAttributesTypes = InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as?: string | undefined
    }

export type FieldType = {
    heading?: {
        label: string
        description: string
    }
    attributes: InputAttributesTypes
    options?: {
        text: string
        value: string
    }[]
} & FormikValues

const FormField: FC<FieldType> = (props): JSX.Element => {
    const { attributes, heading, options } = props
    const fieldId = attributes.id || uuidv4()
    const fieldTypes: FormikValues = {
        submit: 'button',
        empty: null,
    }

    const fieldWrapperProps: FormFieldWrapperProps = {
        id: fieldId,
        type: fieldTypes[attributes.type || 'empty'] || attributes.type,
        label: heading?.label,
        description: heading?.description,
        required: attributes.required,
    }

    const formFieldTypes: FormikValues = {
        select: <FormSelect options={options} attributes={attributes} />,
        radio: <FormMultiple {...props} />,
        checkbox: <FormMultiple {...props} />,
        file: <FormFile {...props} />,
        empty: null,
    }

    return (
        <FormFieldWrapper {...fieldWrapperProps}>
            {formFieldTypes[attributes.type || 'empty'] || (
                <Field id={fieldId} {...attributes} />
            )}
        </FormFieldWrapper>
    )
}
export default FormField
