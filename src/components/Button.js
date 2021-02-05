import useSound from "use-sound";

const Button = ({ title, sound }) => {
  const [play] = useSound(sound);
  return (
    <button
      className=" text-4xl px-8 py-6 rounded text-white  bg-blue-700 font-medium m-4 hover:bg-blue-500 hover:text-white"
      onClick={play}
    >
      {title}
    </button>
  );
};

export default Button;
