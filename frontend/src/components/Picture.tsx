const Picture = ({ url, username }: { url: string; username: string }) => {
  if (url) {
    return null;
  }

  return (
    <div className=" w-10 rounded-full text-2xl  h-10 bg-black flex  justify-center items-center text-white uppercase ">
      {username.charAt(0)}
    </div>
  );
};

export default Picture;
