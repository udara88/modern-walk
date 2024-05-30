const Error = ({error}:{error:string}) => {
  return (
    <div className=" w-full flex justify-center  text-red-600 font-semibold px-4">{error}</div>
  )
}

export default Error