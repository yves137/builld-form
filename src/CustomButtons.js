export function CustomButtons({handleClick}){
   return <button
        onClick={() => handleClick()}
        className="text-white text-2xl font-medium uppercase bg-red-600 py-3 px-20 hover:bg-red-700 rounded-md"
      >
        greet me
      </button>
}