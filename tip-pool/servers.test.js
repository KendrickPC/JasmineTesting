describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should handle an empty input into submitServerInfo()', function() {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0)
  })

  it('should update server name and earnings when server name is submitted', function() {
    serverNameInput.value = 'Kenjamin'
    submitServerInfo();
    let serverName = document.querySelectorAll('#serverTable tbody tr td');
    
    expect(serverName.length).toEqual(2); //NodeList is loaded properly.
    // toBe is for strict comparison aka '===':
    // toEqual can compare Object values to another Object.
    expect(serverName[0].innerHTML).toBe('Kenjamin')
    expect(serverName[1].innerHTML).toBe('$0.00')
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
