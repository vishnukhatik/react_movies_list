const movies = [{
    _id: "gert4tr43444",
    title: "Terminater1",
    numberInStock: 6,
    rating:4,
    like: true
},
{
    _id: "gert4tr43445",
    title: "Terminater2",
    numberInStock: 6,
    rating:4,
    like: false
},
{
    _id: "gert4tr43442",
    title: "Terminater3",
    numberInStock: 6,
    rating:4,
    like: true
},
{
    _id: "gert4tr43448",
    title: "Terminater4",
    numberInStock: 6,
    rating:4,
    like: false
},
{
    _id: "gert4tr43440",
    title: "Terminater5",
    numberInStock: 6,
    rating:4,
    like: false
},
{
    _id: "gert4tr43446",
    title: "Terminater6",
    numberInStock: 6,
    rating:4,
    like: false
},
{
    _id: "gert4tr43244",
    title: "Terminater7",
    numberInStock: 6,
    rating:4,
    like: false
},
{
    _id: "gert4tr8544",
    title: "Terminater8",
    numberInStock: 6,
    rating:4,
    like: false
},
{
    _id: "gert41343444",
    title: "Terminater9",
    numberInStock: 6,
    rating:4,
    like: false
}
]

export const getMovies = () => {
    return movies;
};

export const getMovie = (id) => {
    return movies.find((item)=> item._id === id)
};