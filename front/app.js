document.getElementById("showItem").addEventListener("click", async (e) => {
  try {
    const resultado = await axios.get("http://localhost:4000/dados");
    console.log(resultado.data);
  } catch (err) {
    console.error(eer);
  }
});
