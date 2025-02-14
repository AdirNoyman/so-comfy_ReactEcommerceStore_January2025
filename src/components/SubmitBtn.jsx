import { useNavigation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-infinity loading-md">
            sending...
          </span>
        </>
      ) : (
        text || 'Submit'
      )}
    </button>
  );
};

export default SubmitBtn;
