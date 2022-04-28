# DevopsFrontend

Run run.sh - requires sudo

# HOW TO WORK ON WSL UBUNTU 20.04

run `apt-get update` and `apt-get upgrade`

run `apt-get install ansible` and `apt-get install vagrant`

You need to have virtualbox installed on your machine and have vagrant wsl access with the windows virtual box installation

details here : https://www.vagrantup.com/docs/other/wsl



You might need to add to the WSL path the folder System32, to allow the linux system access to windows commands. Use this command `export PATH="$PATH:/mnt/c/Windows/System32"`

You might need to add to the WSL path the folder : C:\Windows\System32\WindowsPowerShell\v1.0, to allow the linux system access to PowerShell. Use this command : `export PATH="$PATH:/mnt/c/Windows/System32/WindowsPowerShell/v1.0`

Or you can simply run Vagrant on the windows host and then use the Linux WSL to execute ansible on it.

Tutorial of running vagrant with WSL is available here : https://binary.run/guide/vagrant-ansible-and-virtualbox-on-wsl-windows-subsystem-for-linux/

You'll also need to deactivate Hyper-V on your Windows machine (if you have it enabled) ortherwise use : `vagrant up --provider=hyperv`