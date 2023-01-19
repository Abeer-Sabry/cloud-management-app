import React from "react";
// reusable
import NotificationDiv from "../../reusableComponent/NotificationDiv";

const InOne = () => {
  return (
    <section>
      <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
      <p className="text-xl py-8 text-gray-500 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ab. Officia sunt nulla
        aspernatur culpa, eaque tenetur excepturi nostrum tempore.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <NotificationDiv />
        <NotificationDiv />
        <NotificationDiv />
        <NotificationDiv />
        <NotificationDiv />
        <NotificationDiv />
        <NotificationDiv />
        <NotificationDiv />
      </div>
    </section>
  );
};

export default InOne;
