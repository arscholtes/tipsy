# Tip Calculator Library

Generally, when creating a multi-platform application, you want to have UX
tailored to the platform, with core functionality shared across the various
platforms. In this case, the desktop and mobile versions of the tip calculator
were created using `create-react-app` and `create-react-native-app`
respectively without much thought about how much of the generated code was
duplicated across implementations. The end result is that it was quick to get to
an MVP, but less code is shared than would be in a production environment. The
purpose of this repository is thus, to show how two UX targets can share common
code.
