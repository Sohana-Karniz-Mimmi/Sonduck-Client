const TestimonialCard = ({ imgSrc, name, role, testimonial }) => {
  return (
    <div className="p-6 rounded-lg bg-white flex flex-col items-start gap-1">
      <img src={imgSrc} className="rounded-full mb-5" alt={name} />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-lg">{role}</p>
      <p>{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
