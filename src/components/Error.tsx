import React from "react";

const Error = () => {
  return (
    <div>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="max-w-[300px] w-full h-[200px] bg-client-box border-x-2 border-y-[1px] border-box-border rounded-tr-2xl text-left items-start"
        >
          <div className="text-right flex justify-end pr-3">
            <Image
              src={vector}
              alt=""
              width={30}
              height={30}
              className="mt-5"
            />
          </div>
          <div>
            {/* profile image container */}
            <div className="flex pb-2">
              <Image
                src={profileImg}
                width={40}
                height={40}
                alt="Client's profile image"
                className="ml-3 mr-0"
              />
              <div className="mb-0 mt-2 text-left ml-1">
                <h4 className="text-xs">Proactive Approach</h4>
                <p className="text-[0.6rem]">CEO Cellulant group</p>
              </div>
            </div>
            <p className="text-[0.5rem]">
              We stay ahead of emerging threats to ensure your organization is
              always protected.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Error;
