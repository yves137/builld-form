export function Header() {
   return <div className="mb-10 text-blue-600">
        {Array(10)
          .fill(undefined)
          .map((v, i) =>
            (i===0) ? <><span className="underline">Home</span><span> | </span></> :
            (i===9) ? <span className="underline">Exercise {i}</span> :
           <>
           <span className="underline">Exercise {i}</span> <span> | </span>
           </> 
          )
          }
    </div>
}
