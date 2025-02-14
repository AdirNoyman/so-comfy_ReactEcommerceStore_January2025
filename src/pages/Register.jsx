import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          label="Username"
          name="username"
          type="text"
          
        />
        <FormInput
          label="Email"          
          name="email"
          type="email"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"          
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>        
        <p className='text-center'>
          Already a member? <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>Login</Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
