import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { screenWidth, useData } from "../../api/fetctData";
import MySlider from "../basics/MySlider";

const clickHandler = (id: number) => {
  const url = `/blog/${id}`;
  window.location.href = url;
};

export default function BlogSlider() {
  const { blogs } = useData();

  const blogsCards=(blogs.map((blog) => (
    <Card
      key={blog.id}
      onClick={() => clickHandler(blog.id)}
      sx={{
        maxWidth: 345,
        margin: '0 auto',
        boxShadow: 'none',
        cursor: 'pointer',
        paddingTop: screenWidth < 600 ? '2px' : '4rem',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={blog.image[2]}
        alt={`Blog ${blog.id}`}
      />
      <CardContent sx={{ backgroundColor: 'var(--primary-color35)', fontSize: '16px', color: 'var(--back-color-1)' }}>
        <Typography gutterBottom variant="h6" component="div">
          Blog {blog.id}
        </Typography>
        <Typography sx={{ color: 'var(--primary-color)' }} variant="body2" color="text.secondary">
          {blog.transcript}
        </Typography>
      </CardContent>
    </Card>
  )))

  return (
    <div className="our_blogs">
      <h1 className="our_blog_title">
        Blogs
      </h1>
      <MySlider Component={blogsCards} slidesToShow={screenWidth < 600 ? 1 : 3} slidesToScroll={1}/>
    </div>
  );
}