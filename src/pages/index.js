import DefaultLayout from '../components/layouts/default-layout';
import LoginSection from '../components/sections/login/login-section';

export default function HomePage() {
  return (
    <div className='h-full py-0 md:py-24'>
      <LoginSection/>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
};
