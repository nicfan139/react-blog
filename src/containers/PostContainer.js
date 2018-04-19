import React from "react";
import Post from "../components/post";

const posts = [
  {
    title: "Post #1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum et, eaque atque fugiat ad, alias voluptate libero autem odit at, error inventore quibusdam fugit non modi quaerat consequuntur id voluptas."
  },
  {
    title: "Post #2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt, aperiam quia aspernatur. Nostrum corporis nulla minus optio nihil eligendi laboriosam ex asperiores nesciunt, ut sunt, aspernatur excepturi dolorem sapiente."
  },
  {
    title: "Post #3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quae, nisi quisquam eius ipsa accusamus, deserunt veritatis architecto ea sapiente cum delectus corporis itaque, consequatur sunt quam aperiam ipsam ratione."
  },
  {
    title: "Post #4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nam, voluptatum iusto dolore vel tempora maiores mollitia necessitatibus nulla veniam sed asperiores, reiciendis quia, praesentium magni dicta ex, soluta maxime."
  },
  {
    title: "Post #5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas voluptates, necessitatibus consequuntur nulla aperiam, doloremque accusantium ipsam similique error, sunt odit quidem voluptatum aut. Aliquam eius, assumenda vel voluptatum!"
  },
  {
    title: "Post #6",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ut soluta ab tempora suscipit ex id, maxime delectus quisquam obcaecati sint voluptatem molestiae est consequatur dolore vel placeat voluptate quo."
  },
  {
    title: "Post #7",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ducimus voluptates dolorum, aperiam laborum. Cupiditate hic, dolores exercitationem vero blanditiis quae, temporibus, qui numquam nam fugiat provident id accusamus ut."
  },
  {
    title: "Post #8",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint incidunt amet maxime quo quas eos quaerat nihil, numquam, maiores ex aperiam, ea laboriosam. Non optio voluptatem, ut esse praesentium."
  },
  {
    title: "Post #9",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi tempore debitis ratione corporis facilis aspernatur, esse quae! Soluta aliquam asperiores facere odio non quam laboriosam eius perspiciatis, quo est."
  },
  {
    title: "Post #10",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit, eum, libero inventore, ut dolorem modi voluptatibus blanditiis hic aliquam nesciunt sit ea facilis cupiditate, alias non obcaecati velit ipsum!"
  }
]

export const PostContainer = (props) => {
  return (
    <div>
      { posts.map((post) =>
        <Post title={post.title} desc={post.desc} />
      )}
    </div>
  )
}
