import { useForm } from 'react-hook-form';
import { formOptions } from '../../../../utils/form-validation';
import { Button, Logo } from '../../../commons';
import { InputText, InputPassword, InputCheckbox } from '../../../forms';

export default function LoginForm() {
    const { register, formState, handleSubmit } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (val) => {
        console.log('Submit', val);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between items-center h-full bg-white/90 p-8 rounded-none md:rounded-3xl'>
            <Logo className='max-h-64' />
            <div className='w-full space-y-6'>
                <InputText
                    register={register('username')}
                    placeholder='username'
                    errors={errors.username?.message}
                />
                <InputPassword
                    register={register('password')}
                    placeholder='password'
                    errors={errors.password?.message}
                />
                <div className='flex flex-row justify-between items-center w-full'>
                    <InputCheckbox
                        label='Keep me signed in'
                        defaultChecked={false}
                        register={register('acceptTerms')}
                    />
                    <span className='form-label hover:text-primary cursor-pointer on-hover'>Forgot Password</span>
                </div>
            </div>
            <Button label='LOG IN' type='submit' className='max-w-fit mb-9 md:mb-20' />
        </form>
    );
}
