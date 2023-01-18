describe('ShippingAddress', () => {
  beforeAll(async () => {
    await device.launchApp();
  });


  it('should have welcome screen', async () => {
    await expect(element(by.id('pageTitle'))).toBeVisible();
    await element(by.id('pageTitle')).tap();
  });

  // input phone
  it('should enter the Phone value', async () => {
    await element(by.id('phone')).clearText();
    await element(by.id('phone')).typeText('+1-202-555-0114');
  })

  // input shipping Address One
  it('should enter the Shipping Address One value', async () => {
    await element(by.id('shippingAddrOne')).clearText();
    await element(by.id('shippingAddrOne')).typeText('7262 Cactus Court Chino Hills');
  })

  // input shipping Address Two
  it('should enter the Shipping Address Two value', async () => {
    await element(by.id('shippingAddrTwo')).clearText();
    await element(by.id('shippingAddrTwo')).typeText('14 North Smith Ave. Riverside');
  })

  // input city
  it('should enter the City value', async () => {
    await element(by.id('city')).clearText();
    await element(by.id('city')).typeText('CA');
  })
  
  // input Zip code
  it('should enter the Zip value', async () => {
    // scroll to zip code input fied when hidden from the screen
    await waitFor(element(by.id('zipCode'))).toBeVisible().whileElement(by.id('scrollView')).scroll(50, 'down')
    await element(by.id('zipCode')).clearText();
    await element(by.id('zipCode')).typeText('92509');

  })

  it('should click the submit button', async () => {
    // scroll to submit button when hidden from the screen
    await waitFor(element(by.id('submitButton'))).toBeVisible().whileElement(by.id('scrollView')).scroll(60, 'down')
    await element(by.id('submitButton')).tap();
  });
});
