<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card variant="tonal">
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
          <v-card-text class="text-body-1">
            <br>Le secrétariat est ouvert le lundi, mardi, jeudi et vendredi matin.<br><br>N'hésitez pas à nous laisser
            un email ou un message avec votre nom ainsi que le motif de votre appel.
          </v-card-text>
          <v-card-actions class="justify-space-around">
            <v-btn variant="outlined" color="primary" dark href="tel:0298022319">
              <v-icon left>mdi-phone-classic</v-icon>
              02 98 02 23 19
            </v-btn>
            <v-btn variant="outlined" color="primary" dark href="mailto:secretariat.abasq.paire@gmail.com">
              <v-icon left>mdi-email</v-icon>
              <p v-if="isDesktop">Envoyer un mail</p>
              <p v-else>Envoyer mail</p>
            </v-btn>
          </v-card-actions>
        </v-card>
<!--        <v-card>-->
<!--          <v-card-actions class="justify-space-around">-->
<!--            <v-btn color="primary" variant="tonal">-->
<!--              <v-icon left>mdi-calendar-clock</v-icon>-->
<!--                <p v-if="isDesktop">Prendre RDV avec le Dr PAIRE</p>-->
<!--                <p v-else>RDV Dr PAIRE</p>-->
<!--            </v-btn>-->
<!--            <v-btn color="primary" variant="tonal">-->
<!--              <v-icon left>mdi-calendar-clock</v-icon>-->
<!--              <p v-if="isDesktop">Prendre un RDV avec le Dr Abasq</p>-->
<!--              <p v-else>RDV Dr Abasq</p>-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-center">
            <v-icon left>mdi-home</v-icon>
            Adresse
          </v-card-title>
          <v-card-text class="text-body-1">
            <v-img
              src="../assets/address.png"
              height="150px"
            ></v-img>
            <br>50 rue Raymond Leaustic<br>29200 Brest<br><br>
            Afin de faciliter votre venue, nous vous conseillons de vous garer sur le parking <a href="https://goo.gl/maps/sFA67nRbY9yWNBmb6">7 rampe du vieux bourg</a> (zone bleue) face au Carrefour express.<br>Le cabinet se situe à l'étage.
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
          <v-card-text class="text-body-1">
            <v-container>
              Notre cabinet dentaire s'attache à préserver la santé bucco-dentaire, à rétablir ou améliorer le sourrire.<br><br>
              Il s'oriente vers le traitement des maladies parondotales.<br> <span class="text-body-2">(Les maladies des gencives et du parodonte. Elles sont plus connues sous le nom de
              déchaussement des dents et conduisent à la perte des dents.)</span>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDesktop = ref(false);

function checkScreenSize() {
  isDesktop.value = window.innerWidth >= 600; // set breakpoint here
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>
