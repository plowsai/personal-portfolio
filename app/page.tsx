import { BlogPosts } from 'app/components/posts'
import { BuildingInPublic } from 'app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, I'm Jordan Plows 👋
      </h1>
      <p className="mb-4">
        {`I am passionate about accelerating the output of human input while exploring unique interfaces that transform how humans interact with AI. Over the next few years I would like to make contributions to artificial intelligence that accelerate UBI(Universal-Basic-Income), improve diagnostic medicine and advance bipedal humanoid robotics..`}
      </p>
      
      <div className="my-8">
        <BuildingInPublic />
      </div>
      
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
