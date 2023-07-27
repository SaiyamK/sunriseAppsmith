export default {
  async updateTextBox() {
    	try {
				SearchByRegNumberAPI.run()
				const data = await SearchByRegNumberAPI.data
				if (data.length>1 || data.length==0) {
					Text12.text = 'Multiple Data or No Data Error'.toString();
					return 'Multiple Data or No Data Error';
				}
      const firstResult = data[0];
      const regno = firstResult['S.NO'];
      const address = firstResult.ADDRESS;
      const name = firstResult.NAME;
      const mobile = firstResult.MOBILE;
      const amount = firstResult.AMOUNT;
			Container.isVisible = true;
      Text6.text = regno.toString();
      Text7.text = name.toString();
      Text8.text = address.toString();
      Text9.text = mobile.toString();
      Text10.text = amount.toString();
      return firstResult
    	} catch (error) {
				console.error('An error occurred:', error);
				Text12.text = 'API Error'.toString();
				return 'API Error';
    	}
  }
}
