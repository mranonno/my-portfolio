const ProjectCard = () => {
  return (
    <div className="border rounded-xl bg-white p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-gray-100 rounded-bl-xl">
        <h3 className="text-fuchsia-700 px-4 py-2">Full Stack</h3>
      </div>
      <div className="size-16 bg-blue-500 rounded-full"></div>
      <h3 className="text-lg font-semibold text-gray-900  mt-4">Trip Buddy</h3>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate etiam
        tristique, malesuada magna nunc augue pharetra mi suscipit consequat.
        Erat facilisis scelerisque commodo rutrum suscipit laoreet taciti
        elementum integer mi posuere molestie, pellentesque tempus vitae sed
        malesuada habitant eros velit eu
      </p>
    </div>
  );
};

export default ProjectCard;
