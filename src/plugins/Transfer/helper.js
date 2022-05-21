const ftp = require('basic-ftp');

class Helper {
	static async ftpTest(host, username, password, port) {
		const client = new ftp.Client(0);
		try {
			await client.access({
				host,
				user: username,
				password,
				port,
			});
			return true;
		} catch {
			return false;
		} finally {
			client.close();
		}
	}
}

export default Helper;
