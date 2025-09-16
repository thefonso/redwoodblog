import { toast, Toaster } from '@redwoodjs/web/toast'
import {
        FieldError,
        Label,
        Form,
        TextField,
        TextAreaField,
        Submit,
        SubmitHandler,
        useForm,
        FormError
} from '@redwoodjs/forms'

import {
        CreateContactMutation,
        CreateContactMutationVariables,
} from 'types/graphql'

import { Metadata, useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!){
  createContact(input: $input){id}
}
`
interface FormValues {
        name: string
        email: string
        message: string
}


const ContactPage = () => {
        const formMethods = useForm()
        const [create, { loading, error }] = useMutation<
                CreateContactMutation,
                CreateContactMutationVariables
        >(CREATE_CONTACT, {
                onCompleted: () => {
                        toast.success('Thank you for your submission!')
                        formMethods.reset()
                },
        })

        const onSubmit: SubmitHandler<FormValues> = (data) => {
                console.log(data)
                create({
                        variables: { input: data, }
                })
        }

        return (
                <>
                        <Metadata title="Contact" description="Contact page" />
                        <Toaster />
                        <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} formMethods={formMethods} error={error}>
                                <FormError error={error} wrapperClassName="form-error" />
                                <Label name="name" errorClassName="error">Name</Label>
                                <TextField name="name" validation={{ required: true }} />
                                <FieldError name="name" className="error" />

                                <Label name="email" errorClassName="error">Email</Label>
                                <TextField
                                        name="email"
                                        validation={{
                                                required: true,
                                                pattern: {
                                                        value: /^[^@]+@[^.]+\..+$/,
                                                        message: 'Please enter a valid email address'
                                                },
                                        }} />
                                <FieldError name="email" className="error" />

                                <Label name="message" errorClassName="error">Message</Label>
                                <TextAreaField name="message" validation={{ required: true }} />
                                <FieldError name="message" className="error" />

                                <Submit disabled={loading}>Send Message</Submit>
                        </Form>
                </>
        )
}

export default ContactPage
