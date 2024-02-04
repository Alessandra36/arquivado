VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} Menu 
   Caption         =   "Do Nascimento"
   ClientHeight    =   10725
   ClientLeft      =   120
   ClientTop       =   465
   ClientWidth     =   21735
   OleObjectBlob   =   "Menu.frx":0000
   StartUpPosition =   1  'CenterOwner
End
Attribute VB_Name = "Menu"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit

#If VBA7 Then

    Private Declare PtrSafe Function ExibirÍcone Lib "user32" Alias "SendMessageA" ( _
                ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, _
                lParam As Any) As Long
    Private Declare PtrSafe Function IniciaJanela Lib "user32" Alias "GetWindowLongA" ( _
                ByVal hwnd As Long, ByVal nIndex As Long) As Long
    Private Declare PtrSafe Function FindWindow Lib "user32" Alias "FindWindowA" ( _
                ByVal lpClassName As String, _
                ByVal lpWindowName As String) As Long
    Private Declare PtrSafe Function MoveJanela Lib "user32" Alias "SetWindowLongA" ( _
                ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long
    Private Declare PtrSafe Function SetFocus Lib "user32" (ByVal hwnd As Long) As Long
    Private Declare PtrSafe Function DrawMenuBar Lib "user32" (ByVal hwnd As Long) As Long
    Private Declare PtrSafe Function FindWindowA Lib "user32" (ByVal lpClassName As String, _
            ByVal lpWindowName As String) As Long
    Private Declare PtrSafe Function ShowWindow Lib "user32" (ByVal hwnd As Long, _
            ByVal nCmdShow As Long) As Long

#Else

    Private Declare Function ExibirÍcone Lib "user32" Alias "SendMessageA" ( _
                ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, _
                lParam As Any) As Long
    Private Declare Function IniciaJanela Lib "user32" Alias "GetWindowLongA" ( _
                ByVal hwnd As Long, ByVal nIndex As Long) As Long
    Private Declare Function FindWindow Lib "user32" Alias "FindWindowA" ( _
                ByVal lpClassName As String, _
                ByVal lpWindowName As String) As Long
    Private Declare Function MoveJanela Lib "user32" Alias "SetWindowLongA" ( _
                ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long
    Private Declare Function SetFocus Lib "user32" (ByVal hwnd As Long) As Long
    Private Declare Function DrawMenuBar Lib "user32" (ByVal hwnd As Long) As Long
    Private Declare Function FindWindowA Lib "user32" (ByVal lpClassName As String, _
            ByVal lpWindowName As String) As Long
    Private Declare Function ShowWindow Lib "user32" (ByVal hwnd As Long, _
            ByVal nCmdShow As Long) As Long
#End If

Private Const FOCO_ICONE = &H80
Private Const ICONE = 0&
Private Const GRANDE_ICONE = 1&

Private Const ESTILO_PROLONGADO = (-20)
Private Const ESTILO_ATUAL As Long = (-16)

Private Const WS_CAPTION = &HC00000
Private Const WS_BARRA_TAREFAS = &H40000
Private Const WS_MENU As Long = &H80000
Private Const WS_CX_MINIMIZAR As Long = &H20000
Private Const WS_CX_MAXIMIZAR As Long = &H10000
Private Const WS_POPUP As Long = &H80000000

Private Const SW_EXIBIR_NORMAL = 1
Private Const SW_EXIBIR_MINIMIZADO = 2
Private Const SW_EXIBIR_MAXIMIZADO = 3

Dim Form_Personalizado As Long
Dim ESTILO As Long
Dim hIcone As Long

Dim BtAtual() As ClasseEfeito

Private Sub UserForm_Activate()

Form_Personalizado = FindWindowA(vbNullString, Me.Caption)
ESTILO = IniciaJanela(Form_Personalizado, ESTILO_ATUAL)
ESTILO = ESTILO Or WS_MENU
ESTILO = ESTILO Or WS_CX_MINIMIZAR
ESTILO = ESTILO Or WS_CX_MAXIMIZAR
ESTILO = ESTILO Or WS_POPUP '
ESTILO = ESTILO Or WS_CAPTION
MoveJanela Form_Personalizado, ESTILO_ATUAL, (ESTILO)
ESTILO = IniciaJanela(Form_Personalizado, ESTILO_PROLONGADO)
ESTILO = ESTILO Or WS_BARRA_TAREFAS
MoveJanela Form_Personalizado, ESTILO_PROLONGADO, ESTILO
hIcone = Image1.Picture.Handle
Call ExibirÍcone(Form_Personalizado, FOCO_ICONE, ICONE, ByVal hIcone)
DrawMenuBar Form_Personalizado
SetFocus Form_Personalizado
ShowWindow Form_Personalizado, 1
    
End Sub

Sub DataCompleta()

Dim dat As Date
Dim dia As String
Dim dse As String
Dim mes As String
Dim ano As String


dat = Date

dse = Application.WorksheetFunction.Proper(Format(dat, "dddd"))
mes = Application.WorksheetFunction.Proper(Format(dat, "mmmm"))
ano = Format(dat, "yyyy")
dia = Format(dat, "dd")

lblDiaSemana.Caption = dse
lblDataAno.Caption = dia & " de " & mes & " de " & ano


End Sub

Private Sub UserForm_Click()

Dim imag As String
Dim wrk As Workbook
Dim m As Integer

On Error Resume Next

If TextBox1.Value = "" Then
m = 2
ElseIf TextBox1.Value >= 10 Then
m = 2
Else
m = TextBox1.Value + 1

End If

imag = ThisWorkbook.Path & "\imagens\" & m & ".jpg"
Menu.Picture = LoadPicture(imag)
TextBox1.Value = m

End Sub

Private Sub UserForm_Initialize()


Dim ObjetoBt    As Object
Dim BtSelec     As Long

ReDim BtAtual(1 To Me.Controls.Count)

For Each ObjetoBt In Me.Controls
If TypeName(ObjetoBt) = "Label" Then
    BtSelec = BtSelec + 1
    Set BtAtual(BtSelec) = New ClasseEfeito
    Set BtAtual(BtSelec).aplicamod = ObjetoBt
End If

Next ObjetoBt
Set ObjetoBt = Nothing

ReDim Preserve BtAtual(1 To BtSelec)

Call DataCompleta

End Sub

Private Sub UserForm_MouseMove(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
TiraEfeitos
End Sub


