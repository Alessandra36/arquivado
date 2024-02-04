VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "ClasseEfeito"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = False
Attribute VB_Exposed = False
Option Explicit

Public WithEvents aplicamod As MSForms.Label
Attribute aplicamod.VB_VarHelpID = -1

Private Sub aplicamod_MouseMove(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
TiraEfeitos
If Left(aplicamod.Name, 3) = "cmd" Then

    aplicamod.SpecialEffect = fmSpecialEffectFlat
    aplicamod.BackStyle = fmBackStyleOpaque
    aplicamod.BackColor = &HFFFF&
End If

End Sub


Private Sub aplicamod_MouseDown(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
TiraEfeitos
If Left(aplicamod.Name, 3) = "cmd" Then
    aplicamod.SpecialEffect = fmSpecialEffectSunken
    aplicamod.BackStyle = fmBackStyleOpaque
    aplicamod.BackColor = &HFFFF&
End If

End Sub
