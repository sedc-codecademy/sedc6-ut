USE [BadCalculator]
GO
/****** Object:  Table [dbo].[Operations]    Script Date: 24.8.2018 21:21:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Operations](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[First] [int] NULL,
	[Second] [int] NULL,
	[Operation] [nvarchar](1) NULL,
	[Result] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
