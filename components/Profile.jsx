import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full ">
      <h1 className="head_text text-left ">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text_left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {console.log("data: ", data)}
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleEdit={() => handleEdit && handleEdit(prompt)}
            handleDelete={() => handleDelete && handleDelete(prompt)}
          ></PromptCard>
        ))}
      </div>
    </section>
  );
};

export default Profile;
