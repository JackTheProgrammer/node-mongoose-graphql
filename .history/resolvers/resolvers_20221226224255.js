const Post = require("../model/student.model");
const resolvers = {
    Query: {
        hello: () => "Hello user",
        getAllPosts: async() => {
            return await Post.find();
        },
        getPost: async(parent, { id }, context, info) => {
            return await Post.findById(id);
        }
    },
    Mutations: {
        createPost: async(parent, args, context, info) => {
            const { name, email, title, description } = args.post;
            console.log(`${name}, ${email}, ${title}, ${description}`);
            const post = new Post({ name: name, email: email, title: title, description: description });
            return await post.save();
        },
        deletePost: async(parent, { id }, context, info) => {
            await Post.findByIdAndDelete(id);
            return `${id} deleted`;
        },
        updatePost: async(parent, args, context, info) => {
            const { name, email, title, description } = args.post;
            const post = await Post.findByIdAndUpdate(args.id, {
                name: name,
                email: email,
                title: title,
                description: description
            }, {
                new: true
            });
            return post;
        }
    }
};

module.exports = resolvers