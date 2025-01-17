import { useEffect, useState } from 'react'
import FormInput from '@/components/FormInput'
import FormTextArea from '@/components/FormTextArea'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useRouter } from 'next/router'

export default function ContactForm({ redirectTarget }: { redirectTarget?: string }) {
    const router = useRouter()
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [token, setToken] = useState('')

    useEffect(() => {
        if (!executeRecaptcha) {
            return;
        }

        const handleReCaptchaVerify = async () => {
            const token = await executeRecaptcha();
            setToken(token);
        };

        handleReCaptchaVerify();
    }, [executeRecaptcha]);

    return (
        <form action={`${process.env.NEXT_PUBLIC_CONTACT_FORM_URL}`} method="POST">
            <div className="grid grid-cols-1 gap-5">
                <input type="hidden" id="_to" name="_to" value={process.env.NEXT_PUBLIC_CONTACT_FORM_TO} />
                <input type="hidden" id="_honeypot" name="_honeypot" value="" />
                <input type="hidden" id="_recaptcha" name="_recaptcha" value={token} />
                <input type="hidden" name="_redirect" value={redirectTarget ?? `https://ocelotconsulting.com${router.asPath}`} />
                <FormInput label="Name" name="name" value="" onChange={undefined} required/>
                <FormInput label="Email" type="email" name="email" value="" required/>
                <FormInput label="Phone" type="tel" name="phone" value="" />

                <FormTextArea label="Questions or Comments" name="message" value="" />

                <button className="bg-accent text-white px-6 py-3 w-full" type="submit" disabled={!token}>
                    Submit
                </button>
            </div>
        </form>
    )
}