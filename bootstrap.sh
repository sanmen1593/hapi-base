sudo yum -y update

curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -

yum -y install nodejs

cd /vagrant

sudo yum groupinstall 'Development Tools' -y

sudo wget 'https://github.com/cebroker/cdn/raw/master/oracle/oracle-driver/oracle-instantclient12.1-basic-12.1.0.2.0-1.x86_64.rpm'

sudo wget 'https://github.com/cebroker/cdn/raw/master/oracle/oracle-driver/oracle-instantclient12.1-devel-12.1.0.2.0-1.x86_64.rpm'

sudo rpm -ivh oracle-instantclient12.1-basic-12.1.0.2.0-1.x86_64.rpm

sudo rpm -ivh oracle-instantclient12.1-devel-12.1.0.2.0-1.x86_64.rpm

npm install

sudo rm oracle-instantclient12.1-basic-12.1.0.2.0-1.x86_64.rpm oracle-instantclient12.1-devel-12.1.0.2.0-1.x86_64.rpm
