import { SimpleCard } from "../simple-card";

export const Main = (props) => {
  return (
    <main>
      <div>
        {props.blogPosts && props.blogPosts.length
          ? props.blogPosts.map((blogPost) => (
              <SimpleCard
                key={blogPost.id}
                title={blogPost.title}
                description={blogPost.intro}
              />
              //   <div key={blogPost.id}>
              //     <h3>{blogPost.title}</h3>
              //     <p>{blogPost.intro}</p>
              //   </div>
            ))
          : null}
      </div>
    </main>
  );
};
