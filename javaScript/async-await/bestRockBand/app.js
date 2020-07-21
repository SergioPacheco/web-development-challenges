function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band == "Queen") {
      resolve({
        sucess: true,
        bandName: band,
        msg: band + " is the best rock band ever!",
      });
    } else {
      reject({
        success: false,
        msg: "I'm not sure!",
      });
    }
  });
}

function bestRockSong(response) {
  return new Promisse((resolve, reject) => {
    if (response.sucess) {
      resolve("Bohemian Rhapsody by " + response.bandName);
    } else {
      reject("Do you know Queen?");
    }
  });
}
/*
bestRockBand("Queen")
  .then((response) => {
    console.log("Cheking the answer....");
    return bestRockSong(response);
  })
  .then((response) => {
    console.log("Finding the best song...");
    console.log(response);
  })
  .catch((err) => {
    console.log(err.msg);
  });
  */

async function doTheJob() {
  try {
    const bestRockBandResponse = await bestRockBand("Queen");
    const bestRockSongResponse = await bestRockSong(bestRockBand);
  } catch {
    console.log(err.msg);
  }
}
