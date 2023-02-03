# **Choosing A Text Editor**   
[**Choosing a Text Editor Webpage**](https://codefellows.github.io/code-102-guide/curriculum/class-02/Choosing-A-Text-Editor--The-Older-Coder.pdf)


## What is a text editor?

*A text editor is a piece of software that you download and install on your computer, or you access online through your web browser, that allows you to write and manage text, especially the text that you write to build a web site.*

&nbsp; 

## Using The Software That Already Comes With Your Computer

Every computer will come with its own text editor. On Mac computers, the text editor that comes with your computer is called, “Text Edit.” On Windows computers, the text editor that comes with your computer is called, “Notepad.”

And on Linux computers, each distribution will have its own text editor already installed but which one might depend on the flavor of your particular distribution. These text editors will go by different names. One distro might have “Gedit,” and others might have other titles. Check you list of applications to see which text editor comes with your distribution of Linux.

&nbsp; 

## Third-Party Options

There are other options for text editors.

+ NotePad++

- TextWrangler/BB Edit

+ Visual Studio Code

- Atom

+ Brackets

- Sublime Text

&nbsp; 

## The Difference Between Text Editors and IDEs

>1. A text editor kind of gives away what it does in the title—it edits text. It also manages text, and manages files. I love that name “text wrangler” because in a way that’s what really a text editor does. It wrangles your text together into something meaningful.
>
>2. An IDE (Integrated Development Environment) is really a suite of different software all coming together. An IDE is a text editor, a file manager, a compiler, and a debugger all in one software package.
>
>3. You can think about an IDE very much like Microsoft Outlook. If you’ve ever used Microsoft Outlook, you would have quickly noticed that it was an email client, a calendar, a task manager, a to-do list all in one software package. Similar to how an IDE is an all-in-one software package.


&nbsp;

&nbsp;

&nbsp;

# **Linux Tutorial: The Command Line** 

[Linux Tutorial: The Command Line](read://https_ryanstutorials.net/?url=https%3A%2F%2Fryanstutorials.net%2Flinuxtutorial%2Fcommandline.php)


### **Introduction**
Linux has a graphical user interface (GUI) and it works pretty much like the GUI's on other systems that you are familiar with such as Windows and OSX. This tutorial will focus instead on the command line (also known as a terminal) running Bash.

> Don't think of it as leaving the GUI behind so much as adding to it. While you can leave the GUI alltogether, most people open up a command line interface just as another window on their desktop (in fact you can have as many open as you like). This is also to our advantage as we can have several command lines open and doing different tasks in each at the same time. We can also easily jump back to the GUI when it suits us. Experiment until you find the setup that suits you best. 

&nbsp;

### **So what are they exactly?**

*A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.*

The command line typically presents you with a prompt. As you type, it will be displayed after the prompt. Most of the time you will be issuing commands. Here is an example:

>ls -l /home/ryan
>
>total 3
>
>drwxr-xr-x  2 ryan users 4096 Mar 23 13:34 bin
>
>drwxr-xr-x 18 ryan users 4096 Feb 17 09:12 Documents
>
>drwxr-xr-x  2 ryan users 4096 May 05 17:25 public_html

&nbsp;

**Let's break it down:**

- **Line 1** presents us with a prompt ( user@bash ). After that we entered a command ( ls ). Typically a command is always the first thing you type. After that we have what are referred to as command line arguments ( -l /home/ryan ). Important to note, these are separated by spaces (there must be a space between the command and the first command line argument also). The first command line argument ( -l ) is also referred to as an option. Options are typically used to modify the behaviour of the command. Options are usually listed before other arguments and typically start with a dash ( - ).

- **Lines 2 - 5** are output from running the command. Most commands produce output and it will be listed straight under the issuing of the command. Other commands just perform their task and don't display any information unless there was an error.

- **Line 6** presents us with a prompt again. After the command has run and the terminal is ready for you to enter another command the prompt will be displayed. If no prompt is displayed then the command may still be running.
- My terminal probably won't have line numbers on it. They are included here to make it easier to refer to different parts of the material.

&nbsp;

### **Opening a Terminal**


Opening a terminal is fairly easy. 

+ On a Mac, find the program **Terminal** under **Applications -> Utilities**. An easy way to get to it is the key combination 'command + space' which will bring up Spotlight, then start typing Terminal and it will soon show up.
+ On Linux, find it in **Applications -> System** or **Applications -> Utilities**. Alternatively a right-click on the desktop may prompt an 'Open in terminal' option.
+ On Windows and intending to remotely log into another machine, an SSH client is needed. A rather good one is Putty (free) .

&nbsp;

### **The Shell, Bash**
Within a terminal there is what is known as a shell. A shell is a part of the operating system that defines how the terminal will behave and looks after running (or executing) command input. There are various shells available but the most common one is called **bash** which stands for Bourne Again Shell. 

*This tutorial will assume a bash shell is being used.*

Using a command called **echo** will display a system variable stating the current shell. Echo is a command which is used to display messages.

1. user@bash:echo $SHELL
2. /bin/bash
3. user@bash:

As long as it prints something to the screen that ends in bash then all is good.

&nbsp;

### **Shortcuts**

The terminal may seem daunting but don't fret. Linux is full of shortcuts to help make your life easier. You'll be introduced to several of them throughout this tutorial. Take note of them as not only do they make your life easier, they often also save you from making silly mistakes such as typos.

> Here's the first shortcut. Commands are stored in a history. This history can be transversed using the up and down arrow keys. Don't bother re-typing commands that have been previously entered. Instead, I can simply hit the up arrow a few times. I can also edit these commands using the left and right arrow keys to move the cursor where you want.


&nbsp;

&nbsp;

&nbsp;


# **Linux Tutorial: Navigation**

Learning how to navigate Linux

[Linux Tutorial: Navigation](read://https_ryanstutorials.net/?url=https%3A%2F%2Fryanstutorials.net%2Flinuxtutorial%2Fnavigation.php)



### **Introduction: Where do we start?**

The first command we are going to learn is **pwd** which stands for Print Working Directory. (Many commands in linux are named as an abbreviation of a word or words describing them. This makes it easier to remember them.) The command does just that. It displays current or present working directory. 

Try it out:

>user@bash: pwd
>
>/home/ryan
>
>user@bash: 

A lot of commands on the terminal will rely on you being in the right location. As you're moving around, it can be easy to lose track of where you are at. Make use of this command often so as to remind yourself where you presently are.

&nbsp;

### **What's in Our Current Location?**
It's one thing to know where we are. Next we'll want to know what is there. The command for this task is ls. It's short for list. Let's give it a go.

>user@bash:ls
>
>bin Documents public_html
>
>user@bash:



&nbsp;

&nbsp;

&nbsp;

# **Linux Tutorial: More About Files**

[Linux Tutorial: More About Files](read://https_ryanstutorials.net/?url=https%3A%2F%2Fryanstutorials.net%2Flinuxtutorial%2Faboutfiles.php)
