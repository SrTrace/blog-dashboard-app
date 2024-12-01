import CallToAction from "../components/CallToAction.jsx";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="text-md text-gray-500">
        Explore new insights into CSS, JavaScript, React, Node.js, and more!
        Discover amazing projects created by talented developers or dive into
        articles that inspire innovation and learning. Whether you&apos;re
        building something new or expanding your knowledge, this is the perfect
        space to spark your creativity and grow as a developer.
      </p>
      <CallToAction />
    </div>
  );
}
