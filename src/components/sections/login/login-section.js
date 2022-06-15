import LoginForm from './login-content/login-form';

export default function LoginSection() {

  return (
    <div className='flex flex-col justify-center items-start h-full'>
      <div className='w-full md:w-4/12 h-full'>
        <LoginForm />
      </div>
    </div>
  );
}
