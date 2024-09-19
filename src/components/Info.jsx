function Info({ desc, info }) {
    const arrow = ">";
    return (
      <div className="flex border px-2 py-1 justify-between">
        <div>
          <p>{desc}</p>
          <p>{info}</p>
        </div>
        <p className="font-bold text-2xl text-gray-500">{arrow}</p>
      </div>
    );
  }
  
  export default Info;