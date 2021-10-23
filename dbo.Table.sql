CREATE TABLE [dbo].[Person]
(
	[userName] NCHAR(20) NOT NULL PRIMARY KEY, 
    [email] NCHAR(50) NULL, 
    [password] NCHAR(50) NULL, 
    [gender] NCHAR(10) NULL, 
    [place] NCHAR(10) NULL, 
    [music] NCHAR(30) NULL
)
