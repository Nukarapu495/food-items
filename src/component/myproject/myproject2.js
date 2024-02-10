

import { useState } from "react";
import Product from "./product2";
import song0 from "../Assets/song0.mp3";
import song1 from "../Assets/song1.mp3";
import song2 from "../Assets/song2.mp3";
import song3 from "../Assets/song3.mp3";
import song4 from "../Assets/song4.mp3";
import song5 from "../Assets/song5.mp3";
import song6 from "../Assets/song6.mp3";
import song7 from "../Assets/song7.mp3";
import song8 from "../Assets/song8.mp3";
import song9 from "../Assets/song9.mp3";

const MusicApp = () => {
  const initialData = [
    {
      id: 1,
      image: "https://cdn.tollywood.net/wp-content/uploads/2018/09/Vijay-Deverakonda-Geetha-Govindam-deleted-scene.jpg",
      MovieName: "Geetha Govindam",
      Song: song0,
      MusicDirector: "Sid Sriram",
    },
    {
      id: 2,
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/munna-et00002735-07-09-2016-05-46-06.jpg",
      MovieName: "Munna",
      Song: song1,
      MusicDirector: "Harris Jayaraj",
    },
    {
      id: 3,
      image: "https://c.saavncdn.com/148/Nannaku-Prematho-Telugu-2022-20220823140001-500x500.jpg",
      MovieName: "Nannaku Prematho",
      Song: song2,
      MusicDirector: "Devi Sriprasad",
    },
    {
    id: 4,
    image: "https://images.news9live.com/wp-content/uploads/2023/11/Untitled-design-2023-11-30T232029.434.png?q=50&w=1200",
    MovieName: "Animal",
    Song: song3,
    MusicDirector: "Devi Sriprasad",
  },

  {
    id: 5,
    image: "https://pbs.twimg.com/media/FuYRHLpakAIGIIZ.jpg",
    MovieName: "Darling",
    Song: song4,
    MusicDirector: "Devi Sriprasad",
  },

  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUFjgNiHvcnx1kmcxLc2XyCw7svj2DQwegmcx1q4TelvjEoq-7tfLy__HFEKtHrsJKOA&usqp=CAU",
    MovieName: "Mirchi",
    Song: song5,
    MusicDirector: "Devi Sriprasad",
  },
  {
    id: 7,
    image: "https://e0.pxfuel.com/wallpapers/860/748/desktop-wallpaper-darshana-rajendran-hair-wrap-hair-styles-style-hridayam.jpg",
    MovieName: "Dharsana",
    Song: song6,
    MusicDirector: "Devi Sriprasad",
  },
  {
    id: 8,
    image: "https://images.mubicdn.net/images/film/70533/cache-247579-1502873512/image-w1280.jpg",
    MovieName: "Varasham",
    Song: song7,
    MusicDirector: "Devi Sriprasad",
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHg2oDfbOuHdD38ZaDS9cT6TTa3X_S0S-jw&usqp=CAU",
    MovieName: "Pushpa",
    Song: song8,
    MusicDirector: "Devi Sriprasad",
  },
  {
    id: 10,
    image: "https://qph.cf2.quoracdn.net/main-qimg-637173d612bb57620be5dd58f68a081e-lq",
    MovieName: "Ravan maha raj",
    Song: song9,
    MusicDirector: "Devi Sriprasad",
  },
];
  //

  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    const filteredData = initialData.filter(item => {
     
      return item.MovieName.toLowerCase().includes(search.toLowerCase());
    });

    setData(filteredData);
  };

  const handleChange = (e) => {
    setSearch(e.target.value); 
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search} 
          placeholder="search song"
          onChange={handleChange}
          style={{ margin: 20 }}
        />
        <input type="submit" className="btn btn-primary" value="search"  /><br />
      </form>
      <marquee behavior="scroll" direction="left">Enojy The Music With Your Mode:</marquee>
      

      { 
        data.length > 0 ? <Product data={data}/> : <p>No results found</p>
      }
    </div>
  );
};

export default MusicApp;

