import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Coming Soon - Clean Coming Soon Page (Tailwind CSS, NextJs & HTML5) created by themeptation.net">
    <img
      src="/images/xera.svg"
      alt="Themeptation"
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div>
        <img
          src="/images/logo.png"
          alt="Creator Logo"
          className=" w-52 mx-auto"
        />
        <div className="text-center space-y-10 -mt-10">
          <h1 className="text-7xl lg:text-9xl font-extrabold "> Coming soon</h1>
          <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            Something great is on the way. We{' '}
            <span className="font-semibold text-[#0D0B5F]">
              Creator Ethiopia
            </span>{' '}
            working hard to give you the best experience
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-5">
      <ul className="flex space-x-3 items-center">
        <li>
          <Link href="tel:+251921909105">
            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                className='p-2'
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                  fill="#1C274C"
                />
              </svg>
            </a>
          </Link>
        </li>
        <li>
          {' '}
          <Link href="tel:+251921909105">Contact us at +251921909105</Link>{' '}
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
