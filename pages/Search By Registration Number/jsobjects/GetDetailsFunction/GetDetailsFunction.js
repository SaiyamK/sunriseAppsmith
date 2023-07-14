export default {
  async updateTextBox() {
    try {
      const data = await SearchByRegNumberAPI.data;
			if (data.length>1 || data.length==0) {
				return 'Error';
			}
      const firstResult = data[0];
      const regno = firstResult['S.NO'];
      const address = firstResult.ADDRESS;
      const name = firstResult.NAME;
      const mobile = firstResult.MOBILE;
      const amount = firstResult.AMOUNT;
      // Text6.text = regno;
      // Text7.text = name;
      // Text8.text = address;
      // Text9.text = mobile;
      // Text10.text = amount;
      return firstResult;
    } catch (error) {
      console.error('An error occurred:', error);
      return 'Error';
    }
  }
}
