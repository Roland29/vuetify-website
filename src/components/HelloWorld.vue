<template>
  <v-container>
    <v-row>
      <v-col>
      <v-card>
        <v-card-item>
        <v-img
          src="../assets/cabinet.jpg"
          max-height="450"
          cover
          class="bg-grey-lighten-2"
        ></v-img>
        </v-card-item>
      </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-center">Horaires de consultation</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                  <v-list-item-title>
                    <v-row>
                      <v-col>Lundi</v-col>
                      <v-col>9h à 12h</v-col>
                      <v-col>13h à 18h</v-col>
                    </v-row>
                  </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-row>
                    <v-col>Mardi</v-col>
                    <v-col>9h à 12h</v-col>
                    <v-col>13h30 à 18h30</v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-row>
                    <v-col>Jeudi</v-col>
                    <v-col>9h à 12h</v-col>
                    <v-col>13h30 à 17h30</v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-row>
                    <v-col>Vendredi</v-col>
                    <v-col>9h à 12h</v-col>
                    <v-col>13h à 18h</v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item>
            </v-list>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="text-center">Prendre rendez-vous</v-card-title>
          <v-card-text>
              Le secrétariat est ouvert les lundi, mardi, jeudi et vendredi de 16h30 à 18h30. N'hésitez pas à nous laisser un email ou un message avec votre nom ainsi que le motif de votre appel au:
          </v-card-text>
          <v-card-actions class="justify-space-around">
            <v-btn variant="outlined" color="primary" dark href="tel:0298022319">
              <v-icon left>mdi-phone-classic</v-icon>
               02 98 02 23 19
            </v-btn>
            <v-btn variant="outlined" color="primary" dark href="mailto:secretaria.abasq.paire@gmail.com">
              <v-icon left>mdi-email</v-icon>
              Envoyer un mail
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card>
          <v-card-actions class="justify-space-around">
            <v-btn color="primary" variant="tonal">
              <v-icon left>mdi-calendar-clock</v-icon>
              Prendre RDV avec le Dr PAIRE
            </v-btn>
            <v-btn color="primary" variant="tonal">
              <v-icon left>mdi-calendar-clock</v-icon>
              Prendre un RDV avec le Dr Abasq
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-center">
            <v-icon left>mdi-home</v-icon>
            Adresse
          </v-card-title>
          <v-card-text>
                 50 rue Raymond Leaustic<br>29200 Brest
          </v-card-text>
          <v-card-actions class="justify-space-around">
            <v-btn color="primary" variant="outlined" href="https://goo.gl/maps/XDhjnNX1RpbE22pc8">
              <v-icon color="#F44336" left>mdi-google-maps</v-icon>
              Direction
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="text-center">Omnipratique et Parodontie</v-card-title>
          <v-card-text>
            <v-container>
                La parodontie traite les malmadies des gencives et du parodonte. Elles sont plus connues sous le nom de déchaussement des dents et conduisent à la perte des dents.
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-footer flat class="justify-center">
    <a href="mailto:secretaria.abasq.paire@gmail.com">secretaria.abasq.paire@gmail.com</a>
  </v-footer>
</template>

<script lang="ts" setup>

</script>
