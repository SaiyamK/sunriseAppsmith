export default {
  async updateTextBox() {
    	try {
				const data = await SearchByRegNumberAPI.data
				if (data.length==0) {
					Text12.text = 'No Data Found!'.toString();
					showModal('ErrorModal');
					return 'No Data Found!';
				}
				if (data.length>1) {
					Text12.text = 'Multiple Records Found!'.toString();
					ErrorModal.isVisible = true;
					showModal('ErrorModal');
					return 'Multiple Records Found!';
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
				Text12.text = 'API Error'.toString();
				showModal('ErrorModal');
				return 'API Error';
    	}
  }
}
