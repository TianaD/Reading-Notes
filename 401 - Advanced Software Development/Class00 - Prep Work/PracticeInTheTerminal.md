# [PracticeInTheTerminal](https://ryanstutorials.net/linuxtutorial/)

## Instructions

### When you are finished with all of the lessons, create a new entry in your reading notes repository summarizing your observations and learnings, highlighting things like your ‘ah hah’ moments or really interesting code snippets. Please note: If you submit one-liners (i.e. “The permissions section talked about permissions. It was cool.”) you will not receive credit for this assignment.

## Submit a link to your rendered notes page.

&nbsp;

&nbsp;

**Here is a summary of the content from the link:**

This tutorial is an introduction to Linux, a free and open source operating system that can run on a variety of devices. It covers the following topics:

**Q: What is Linux and why use it?**

A: Linux is a free and open source operating system that can run on a variety of devices. It is powerful, flexible and customizable. It can be used for various purposes such as web servers, desktops, laptops, smartphones, tablets, embedded systems, etc. It also has a large and active community of developers and users who contribute to its improvement and support1.

**Q: How to get started with Linux, including installing it on a computer or using a live CD or USB**

A: There are many ways to get started with Linux, depending on your needs and preferences. One way is to install it on a computer, either as the only operating system or alongside another one (dual boot). This requires some preparation, such as downloading an ISO image of a Linux distribution, burning it to a CD or USB, and following the installation instructions. Another way is to use a live CD or USB, which allows you to try Linux without installing it on your hard drive. This is useful for testing compatibility, troubleshooting, or experimenting with different distributions. You can also use a virtual machine, which is a software that simulates a computer inside your existing operating system. This lets you run Linux as an application without affecting your original system1.

**Q: How to navigate the Linux file system and use basic commands**

A: The Linux file system is organized in a hierarchical structure, starting from the root directory (/) and branching into subdirectories and files. You can navigate the file system using the command line interface (terminal), which is a text-based environment where you can type commands and see their output. Some basic commands for navigation are:

pwd: print working directory, shows where you are in the file system

ls: list files and directories in the current or specified directory

cd: change directory, moves you to another directory

~: shorthand for your home directory

.: shorthand for your current directory

…: shorthand for your parent directory

TAB: auto-complete a path or command name1

**Q: How to manipulate files and directories, such as creating, copying, moving, renaming and deleting them**

A: You can manipulate files and directories using various commands, such as:

- mkdir: make directory, creates a new directory

- rmdir: remove directory, deletes an empty directory

- touch: create a blank file or update its timestamp

- cp: copy files or directories from one location to another

- mv: move files or directories from one location to another or rename them

- rm: remove files or directories (use with caution)

- *: wildcard that matches any number of characters in a filename1

**Q: How to use wildcards, pipes and redirection to perform complex tasks with commands**

A: Wildcards are symbols that can match one or more characters in a filename or path. They can be used to specify multiple files or directories at once, or to filter the output of a command. Some common wildcards are:

: matches any number of characters (e.g., b matches bat, ball, banana, etc.)

?: matches any single character (e.g., file.??? matches file.txt, file.jpg, file.pdf, etc.)

[ ]: matches any character within the brackets (e.g., b[aio]t matches bat, bit, bot, etc.)1

Pipes are symbols that connect the output of one command to the input of another command. They can be used to chain multiple commands together and create powerful pipelines that process data in various ways. The pipe symbol is | (vertical bar). For example:

ls | sort | head: lists the files in the current directory, sorts them alphabetically, and shows the first ten lines1

Redirection is a way of sending the output of a command to a file instead of the screen. It can be used to save data to a file or overwrite an existing file. The redirection symbol is > (greater than sign). For example:

ls > list.txt: lists the files in the current directory and saves them to list.txt1
You can also append the output of a command to an existing file using >> (double greater than sign). For example:

ls >> list.txt: lists the files in the current directory and adds them to list.txt1
You can also redirect the input of a command from a file instead of the keyboard. The redirection symbol is < (less than sign). For example:

wc < list.txt: counts the words, characters and lines in list.txt1

Q: How to use permissions and ownership to control access to files and directories

A: Permissions and ownership are attributes that determine who can access and modify files and directories in Linux. There are three types of permissions: read ®, write (w) and execute (x). There are also three types of users: owner (u), group (g) and others (o). Each file or directory has an owner and a group associated with it, and a set of permissions for each type of user. You can view the permissions and ownership of a file or directory using the command:

ls -l: list files and directories in long format, showing permissions, ownership, size, date and name1
You can change the permissions of a file or directory using the command:

chmod: change mode, modifies the permissions of files or directories. You can use either shorthand (e.g., 754) or longhand (e.g., g+x) to specify the new permissions1
You can change the owner or group of a file or directory using the command:

chown: change owner, changes the owner and/or group of files or directories. You can use either username or user ID to specify the new owner or group1

Q: How to use processes and jobs to run and manage programs

A: A process is an instance of a program that is running on the system. A job is a process that is started from a terminal. You can run and manage processes and jobs using various commands, such as:

ps: show information about processes, such as process ID, status, CPU usage, memory usage, etc.

top: show dynamic information about processes, such as CPU usage, memory usage, etc.

kill: send a signal to a process to terminate it

&: run a process in the background, allowing you to continue using the terminal

fg: bring a background process to the foreground

bg: resume a suspended process in the background

CTRL-Z: suspend a foreground process

CTRL-C: interrupt a foreground process1

Q: How to use scripts and variables to automate tasks and customize the environment

A: A script is a file that contains a series of commands that can be executed by a shell. A variable is a name that stores a value that can be used by commands or scripts. You can use scripts and variables to automate tasks and customize the environment using various commands, such as:

echo: print a message or the value of a variable

read: read input from the keyboard or a file and store it in a variable

export: make a variable available to other processes

source: execute commands from a file in the current shell

if: execute commands conditionally based on a test

for: execute commands repeatedly for each item in a list

while: execute commands repeatedly while a condition is true

case: execute commands based on pattern matching1

Q: How to use regular expressions and grep to search for patterns in text files

A: A regular expression is a sequence of characters that defines a pattern that can be matched in text. Grep is a command that searches for lines in text files that match a regular expression. You can use regular expressions and grep to search for patterns in text files using various commands, such as:

grep `<pattern>` `<file>`: search for lines in file that match pattern

grep -v `<pattern>` `<file>`: search for lines in file that do not match pattern

grep -i `<pattern>` `<file>`: search for lines in file that match pattern case-insensitively

grep -n `<pattern>` `<file>`: search for lines in file that match pattern and show line numbers

grep -c `<pattern>` `<file>`: count how many lines in file match pattern1
Some common regular expression symbols are:

^: matches the beginning of a line

$: matches the end of a line

.: matches any single character

[ ]: matches any character within the brackets

[^ ]: matches any character not within the brackets

*: matches zero or more occurrences of the previous character

+: matches one or more occurrences of the previous character

?: matches zero or one occurrence of the previous character

\ : escapes the special meaning of the following character1

Q: How to use sed and awk to edit and process text files

A: Sed and awk are two powerful commands that can edit and process text files using regular expressions and patterns. You can use sed and awk to edit and process text files using various commands, such as:

sed `<expression>` `<file>:` apply expression to each line in file and print

The tutorial also provides exercises, quizzes and cheat sheets to help the learner practice and review the concepts. It assumes some basic computer knowledge but no prior experience with Linux. It is suitable for beginners who want to learn the basics of Linux or for intermediate users who want to refresh their skills.