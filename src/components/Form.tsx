import React, { useState } from 'react';
import Button from './Button';

const Form = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const checkEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    error && setError(false);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!checkEmail(email)) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center bg-darkblue1 py-8 md:py-12 px-8 md:px-[6rem] rounded-lg drop-shadow-2xl md:w-[950px]">
      <p className="text-white text-center text-2xl md:text-6xl font-bold">Get early access today</p>
      <p className="text-white text-center mt-6 max-w-[290px] md:max-w-[620px] text-base font-body">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you.
      </p>
      <div className="flex flex-col w-full mt-10 justify-center md:flex-row gap-4">
        <div className="flex flex-col w-full">
          <input
            className="text-sm w-full md:w-[90%] h-12 rounded-full px-8"
            placeholder="email@example.com"
            onChange={handleChange}
          />
          <p className={`text-red-500 text-sm font-bold font-body ml-8 mt-2 ${error ? 'visible' : 'invisible'}`}>
            Please enter a valid email address
          </p>
        </div>
        <Button text="Get Started For Free" full={true} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Form;
