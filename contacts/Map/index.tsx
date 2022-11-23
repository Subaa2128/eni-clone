import React from "react";

const Map = () => {
  return (
    <div className="mx pad">
      <div style={{ padding: "10px" }}>
        <iframe
          style={{ border: "0" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2973.048447359478!2d12.4694556!3d41.8272549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258b1cb86d580d%3A0x3df69f6e1483a576!2sENI+S.p.A.!5e0!3m2!1sen!2sit!4v1538129280154"
          frameBorder={0}
          height="300px"
          width="100%"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
